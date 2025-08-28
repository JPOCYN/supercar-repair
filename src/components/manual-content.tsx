"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface ManualContentProps {
  content: string
  title: string
}

export function ManualContent({ content, title }: ManualContentProps) {
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set())

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItems(new Set([...copiedItems, id]))
      setTimeout(() => {
        setCopiedItems(prev => {
          const next = new Set(prev)
          next.delete(id)
          return next
        })
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  // Parse markdown-like content and render with copy buttons for code blocks
  const renderContent = (content: string) => {
    const parts = content.split(/(```[\s\S]*?```)/g)
    
    return parts.map((part, index) => {
      if (part.startsWith('```') && part.endsWith('```')) {
        // Extract code content and language
        const lines = part.split('\n')
        const language = lines[0].replace('```', '').trim() || 'text'
        const code = lines.slice(1, -1).join('\n')
        const codeId = `code-${index}`
        
        return (
          <div key={index} className="relative group my-4">
            <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard(code, codeId)}
                className="h-8 w-8 p-0"
              >
                {copiedItems.has(codeId) ? (
                  <Check className="h-3 w-3" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </Button>
            </div>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code className={cn("text-sm", language && `language-${language}`)}>
                {code}
              </code>
            </pre>
          </div>
        )
      } else {
        // Regular content - convert basic markdown
        return (
          <div 
            key={index} 
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ 
              __html: part
                .replace(/^# (.*$)/gm, '<h1>$1</h1>')
                .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/`(.*?)`/g, '<code>$1</code>')
                .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/^\| (.*) \|$/gm, (match, content) => {
                  const cells = content.split(' | ').map((cell: string) => `<td>${cell}</td>`).join('')
                  return `<tr>${cells}</tr>`
                })
                .replace(/(\n<tr>.*<\/tr>\n)/gs, '<table class="w-full border-collapse border border-border mb-6">$1</table>')
                .replace(/^- (.*$)/gm, '<li>$1</li>')
                .replace(/(\n<li>.*<\/li>\n)/gs, '<ul class="ml-6 mb-4">$1</ul>')
                .replace(/^(\d+)\. (.*$)/gm, '<li>$2</li>')
                .replace(/!\[([^\]]*)\]\(([^)]*)\)/g, '<figure class="my-6"><img src="$2" alt="$1" class="w-full rounded-lg border" /><figcaption class="text-sm text-muted-foreground mt-2 text-center">$1</figcaption></figure>')
                .replace(/\[([^\]]*)\]\(([^)]*)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
                .replace(/\n/g, '<br>')
                .replace(/^<br>/, '')
                .replace(/<br>$/, '')
            }}
          />
        )
      }
    })
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="space-y-4">
        {renderContent(content)}
      </div>
    </div>
  )
}
