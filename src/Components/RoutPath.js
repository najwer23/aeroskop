import Home from './Home';
import KrainaLodu2 from './Posts/KrainaLodu2';
import RayaLastDragon from './Posts/RayaLastDragon';
import Posts from './ShowPost';

export const feedArr = [
    {
        id: "2",
        pathPoster: "kl2.jpg",
        titlePolish: "Kraina lodu 2",
        titleEnglish: "Frozen II",
        desc: "Elsa i Anna wraz z przyjaciółmi udają się do Zaczarowanego Lasu w poszukiwaniu pomocy dla swego Królestwa.",
        path: "/frozen-II",
        componentName: <KrainaLodu2/>,
    },
    {
        id: "1",
        pathPoster: "raya.jpg",
        titlePolish: "Raya i ostatni smok",
        titleEnglish: "Raya and the Last Dragon",
        desc: "W zamieszkałym przez starożytną cywilizację królestwie Kumandra, wojowniczka Raya usiłuje odnaleźć ostatniego smoka.",
        path: "/raya-and-the-last-dragon",
        componentName: <RayaLastDragon/>
    }
]

const feedRoutes = []; 
feedArr.map(v=>feedRoutes.push(
    {   
        path: v.path, 
        component: Posts,
        name: Posts.name,
        fullText: v.componentName
    }
))

const mainRoutes = [
    { path: "/", component: Home, name: 'Home', exact: null }
]

export const routes = [
    ...mainRoutes, ...feedRoutes
];

console.log(routes)