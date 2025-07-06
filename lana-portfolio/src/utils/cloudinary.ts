import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function getImages() {
  const results = await cloudinary.search
    .expression('folder:portfolio/*')
    .sort_by('created_at', 'desc')
    .max_results(400)
    .execute();

  const images = results.resources.map((resource: any) => {
    const { width, height, public_id, format } = resource;
    return {
      id: public_id,
      height: height,
      width: width,
      public_id: public_id,
      format: format,
    };
  });

  return images;
}

export function mapImageResources(resources: any[]) {
  return resources.map((resource) => {
    const { width, height, public_id, format } = resource;
    return {
      id: public_id,
      height: height,
      width: width,
      public_id: public_id,
      format: format,
    };
  });
}

export function buildUrl(public_id: string, transform?: any) {
  const baseUrl = cloudinary.url(public_id, {
    secure: true,
    ...transform,
  });
  
  return baseUrl;
}
