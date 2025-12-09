# Supabase Storage Setup Instructions

## Issue
You're getting a "signature verification failed" error when uploading images to the 'members' bucket.

## Solution
You need to configure the storage bucket policy in Supabase:

### Step 1: Go to Storage Settings
1. Open your Supabase dashboard: https://app.supabase.com/project/rvavwuccbyhqayteuoqp
2. Click on **Storage** in the left sidebar
3. Click on the **members** bucket

### Step 2: Configure Bucket Policies
Click on **Policies** tab and add the following policies:

#### Policy 1: Allow Public Upload (For Testing)
```sql
CREATE POLICY "Allow public uploads"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'members');
```

#### Policy 2: Allow Public Read
```sql
CREATE POLICY "Allow public reads"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'members');
```

#### Policy 3: Allow Public Delete
```sql
CREATE POLICY "Allow public deletes"
ON storage.objects FOR DELETE
TO public
USING (bucket_id = 'members');
```

### Step 3: Make Bucket Public
1. In the bucket settings, ensure the bucket is set to **Public**
2. This allows anyone to read the files (but policies control who can upload/delete)

### Alternative: Authenticated Users Only
If you want only authenticated users to upload:

```sql
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'members');

CREATE POLICY "Authenticated users can delete"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'members');
```

## Current Workaround
The code has been updated to:
- Continue saving member data even if image upload fails
- Show a warning message if image upload fails
- Save member without image_url if upload fails

## Test Again
After configuring the policies, try uploading a member with an image again.
