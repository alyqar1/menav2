/*
  # Update video URLs to fix connection issues

  1. Changes
    - Update hero_video URL to use correct YouTube embed format
    - Update success stories video URLs to use correct YouTube embed format
    - Add proper parameters to YouTube URLs for better security and performance
*/

-- Update hero video URL
UPDATE hero_video 
SET video_url = 'https://www.youtube-nocookie.com/embed/A3AsVAZ7wIs?si=5AIvDc4JMpit4bLg&rel=0&modestbranding=1'
WHERE video_url LIKE '%youtube.com%';

-- Update success stories video URLs
UPDATE success_stories 
SET video_url = CASE 
  WHEN name = 'محمد السيد' THEN 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1'
  WHEN name = 'سارة العتيبي' THEN 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1'
  WHEN name = 'أحمد الهاشمي' THEN 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1'
  ELSE video_url
END
WHERE video_url LIKE '%youtube.com%';