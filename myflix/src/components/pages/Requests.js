const key= "813bdf3333b7b354a5bc8c33e57a703b";

const requests={
   requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
   requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
   requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
   requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US&page=1`,
}
export default requests;