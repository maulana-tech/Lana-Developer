# Data Structure Documentation

This application uses a flexible data architecture that supports both database-driven and mock data approaches.

## Architecture Overview

### Database-First Approach
The application is designed to use Supabase as the primary data source for:
- **Projects**: Portfolio projects with full CRUD operations
- **Certificates**: Professional certifications and achievements

### Fallback System
When database is unavailable or disabled, the application falls back to mock data to ensure functionality.

## Configuration

### Environment Variables
```env
# Set to 'true' to use database, 'false' to use mock data
NEXT_PUBLIC_USE_DATABASE=false

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Data Sources

### Projects
- **Database**: `/src/lib/database/projects.ts`
- **Mock Data**: `/src/lib/projects.ts` (mockProjects array)
- **Types**: `/src/lib/projects.ts` (Project interface)

### Certificates  
- **Database**: `/src/lib/database/certificates.ts`
- **Mock Data**: `/src/lib/certificates.ts` (mockCertificates array)
- **Types**: `/src/types/certificates.ts`

## Usage

### Sync Functions (Current Usage)
For React components, use synchronous functions that return mock data:
```typescript
import { getAllProjectsSync, getFeaturedProjectsSync } from '@/lib/projects';
import { getAllCertificatesSync } from '@/lib/certificates';
```

### Async Functions (Database)
For database operations, use async functions:
```typescript
import { getAllProjects, getFeaturedProjects } from '@/lib/projects';
import { getAllCertificates } from '@/lib/certificates';
```

## Database Schema

### Projects Table
```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  long_description TEXT,
  tags TEXT[],
  type TEXT,
  image TEXT,
  images TEXT[],
  link TEXT,
  github TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Certificates Table
```sql
CREATE TABLE certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  issuer TEXT,
  date TEXT,
  image TEXT,
  description TEXT,
  link TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Migration Notes

### Removed Files
The following static data files have been removed to eliminate redundancy:
- ~~`/src/data/projects.ts`~~ 
- ~~`/src/data/certificates.ts`~~

### New Structure
- Mock data is now embedded within the main service files
- Database integration is handled through dedicated database modules
- Type definitions are centralized in `/src/types/` directory

## Benefits

1. **No Redundancy**: Single source of truth for data structure
2. **Flexibility**: Easy switching between mock and database data
3. **Type Safety**: Centralized TypeScript interfaces
4. **Scalability**: Database-ready architecture
5. **Development**: Mock data ensures development continues even without database

## Development Workflow

1. **Development**: Use mock data (`NEXT_PUBLIC_USE_DATABASE=false`)
2. **Testing**: Can switch to database for testing
3. **Production**: Use database with fallback support

This architecture ensures the application remains functional and maintainable regardless of the data source configuration.