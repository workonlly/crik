# REQUIRED: Supabase Storage Bucket Policies Setup

## You MUST run these SQL commands in Supabase to allow image uploads!

Go to: https://app.supabase.com/project/rvavwuccbyhqayteuoqp/sql/new

---

## For MEMBERS Bucket:

```sql
-- Allow anyone to upload to members bucket
CREATE POLICY "Public can upload to members"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'members');

-- Allow anyone to read from members bucket
CREATE POLICY "Public can read members"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'members');

-- Allow anyone to delete from members bucket
CREATE POLICY "Public can delete from members"
ON storage.objects
FOR DELETE
TO public
USING (bucket_id = 'members');

-- Allow anyone to update in members bucket
CREATE POLICY "Public can update members"
ON storage.objects
FOR UPDATE
TO public
USING (bucket_id = 'members');
```

---

## For BLOG Bucket:

```sql
-- Allow anyone to upload to blog bucket
CREATE POLICY "Public can upload to blog"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'blog');

-- Allow anyone to read from blog bucket
CREATE POLICY "Public can read blog"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'blog');

-- Allow anyone to delete from blog bucket
CREATE POLICY "Public can delete from blog"
ON storage.objects
FOR DELETE
TO public
USING (bucket_id = 'blog');

-- Allow anyone to update in blog bucket
CREATE POLICY "Public can update blog"
ON storage.objects
FOR UPDATE
TO public
USING (bucket_id = 'blog');
```

---

## For HERO_IMAGES Bucket:

```sql
-- Allow anyone to upload to hero_images bucket
CREATE POLICY "Public can upload to hero_images"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'hero_images');

-- Allow anyone to read from hero_images bucket
CREATE POLICY "Public can read hero_images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'hero_images');

-- Allow anyone to delete from hero_images bucket
CREATE POLICY "Public can delete from hero_images"
ON storage.objects
FOR DELETE
TO public
USING (bucket_id = 'hero_images');

-- Allow anyone to update in hero_images bucket
CREATE POLICY "Public can update hero_images"
ON storage.objects
FOR UPDATE
TO public
USING (bucket_id = 'hero_images');
```

---

## ALSO: Make Buckets Public

1. Go to: https://app.supabase.com/project/rvavwuccbyhqayteuoqp/storage/buckets
2. For each bucket (members, blog, hero_images):
   - Click the bucket name
   - Click the three dots menu
   - Click "Edit"
   - Check "Public bucket"
   - Save

---

## Steps to Fix:

1. Copy ALL the SQL above
2. Go to SQL Editor: https://app.supabase.com/project/rvavwuccbyhqayteuoqp/sql/new
3. Paste and click "Run"
4. Make each bucket public (see above)
5. Refresh your app and try uploading again

The error will disappear once these policies are in place!
