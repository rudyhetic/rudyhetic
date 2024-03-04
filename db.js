const { createClient } = require('@supabase/supabase-js');


const supabaseUrl = 'https://wffdsxydwxjnamkpgjfb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmZmRzeHlkd3hqbmFta3BnamZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NTQ3NzUsImV4cCI6MjAxODAzMDc3NX0.krkGOL17KbW2HxoT6F8TDLFSaoya9M-ydczJ8ayiBZE';


const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
