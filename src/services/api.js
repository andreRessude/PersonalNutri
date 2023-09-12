export async function buscarPratos() {

    const apiUrl = 'https://personalnutriapipratos.andrenascimen15.repl.co/pratos'
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Erro ao buscar pratos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar pratos:', error);
      throw error;
    }
}
