const supabase = require('./db');


async function testConnection() {
  try {
    const { data, error } = await supabase
      .from('my_quiz_result')
      .select('*');

    if (error) {
      console.error('Erreur lors de la requête :', error);
    } else {
      console.log('Connexion à Supabase réussie ! Résultats de la requête :', data);
    }
  } catch (e) {
    console.error('Erreur lors de la connexion à Supabase :', e.message);
  }
}


testConnection();
