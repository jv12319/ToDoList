import { createClient } from '@supabase/supabase-js';

const URL = 'https://wwigthmcyzlzewzmxmrj.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3aWd0aG1jeXpsemV3em14bXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNzM3MjEsImV4cCI6MjAxNDY0OTcyMX0.ECeQDj4nYu7LJDXtPA4LFlWQcCNeU1v3N6NEFhkILiM';

export const supabase = createClient(URL, API_KEY);

