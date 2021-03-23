import Home from './Home';
import Posts from './Posts';

export const feedArr = [
    {
        id: "2",
        pathPoster: "kl2.jpg",
        titlePolish: "Kraina lodu 2",
        titleEnglish: "Frozen II",
        desc: "Elsa i Anna wraz z przyjaciółmi udają się do Zaczarowanego Lasu w poszukiwaniu pomocy dla swego Królestwa.",
        path: "/frozen-II",
        componentName: Posts
    },
    {
        id: "1",
        pathPoster: "raya.jpg",
        titlePolish: "Raya i ostatni smok",
        titleEnglish: "Raya and the Last Dragon",
        desc: "W zamieszkałym przez starożytną cywilizację królestwie Kumandra, wojowniczka Raya usiłuje odnaleźć ostatniego smoka.",
        path: "/raya-and-the-last-dragon",
        componentName: Home
    }
]

const feedRoutes = []; 
feedArr.map(v=>feedRoutes.push(
    {   
        path: v.path, 
        component: v.componentName,
        name: v.componentName.name
    }
))

const mainRoutes = [
    { path: "/", component: Home, name: 'Home', exact: null }
]

export const routes = [
    ...mainRoutes, ...feedRoutes
];

console.log(routes)