# Supercar Repair Manual

A professional Next.js application for accessing McLaren supercar repair manuals with premium UI/UX and activation code-based access control.

## Features

- **Authentication**: Secure login/signup with NextAuth.js
- **Access Control**: Activation code-based subscription system
- **Premium UI**: Dark mode default with shadcn/ui components
- **Manual Browser**: Complete McLaren model coverage with searchable content
- **Admin Dashboard**: Code generation and brand management
- **Mobile Responsive**: Optimized for all devices
- **Professional Content**: Technical manuals with diagrams and procedures

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Authentication**: NextAuth.js
- **Icons**: Lucide React
- **State Management**: React hooks + NextAuth session

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JPOCYN/supercar-repair.git
cd supercar-repair
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Demo Credentials

- **Admin**: admin@example.com / password123
- **User**: user@example.com / password123

## Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── (auth)/            # Authentication pages
│   ├── api/               # API routes
│   ├── browse/            # Model browsing
│   ├── manual/            # Manual viewer
│   ├── pricing/           # Pricing plans
│   ├── account/           # User account
│   └── admin/             # Admin dashboard
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── data/                 # Mock data files
├── lib/                  # Utilities and auth
└── types/                # TypeScript definitions
```

## Key Features

### Authentication System
- Secure credential-based authentication
- Role-based access (user/admin)
- Session management with NextAuth.js
- Protected routes with middleware

### Activation Code System
- Shopify integration for code purchase
- Multiple plan types (Day/Week/Month/Year)
- Code redemption and validation
- Automatic access expiration

### Manual Browser
- McLaren model coverage
- Sectioned manual content
- Search functionality
- Mobile-responsive navigation
- Downloadable content sections

### Admin Dashboard
- Activation code generation
- Brand visibility controls
- User activity monitoring
- System analytics

### UI/UX Features
- Dark mode default
- Premium design system
- Accessible components
- Loading states and skeletons
- Empty state handling
- Mobile-first responsive design

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXTAUTH_URL` | Application URL | Yes |
| `NEXTAUTH_SECRET` | JWT signing secret | Yes |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

## API Endpoints

- `POST /api/auth/signup` - User registration
- `POST /api/redeem` - Activation code redemption
- `GET/POST /api/auth/[...nextauth]` - NextAuth endpoints

## Mock Data

The application includes comprehensive mock data:

- **Brands**: McLaren (enabled), Ferrari/Lamborghini/Porsche (coming soon)
- **Models**: 11 McLaren models with images
- **Sections**: 6 manual sections per model
- **Content**: Sample technical documentation
- **Codes**: Pre-generated activation codes
- **Users**: Demo admin and user accounts

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Security Notes

- All routes are protected by authentication middleware
- Passwords are hashed with bcrypt
- Session tokens are signed and encrypted
- Input validation on all forms
- XSS protection with React's built-in escaping

## License

This project is for demonstration purposes. Not affiliated with McLaren Automotive Limited.

## Support

For issues and questions, please open a GitHub issue or contact the development team.
