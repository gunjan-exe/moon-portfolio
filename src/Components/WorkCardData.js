// acts as a datafile/ API
import pro1 from "../assets/eclipse.jpg"
import tictactoe from "../assets/tictactoe.png"
import dashboard from "../assets/dashboard.png"
import game from "../assets/2048.png"

const ProjectCardData = [
    {
        imgsrc: tictactoe,
        title:"Tic Tac Toe",
        text: "Tic Tac Toe game developed in Vanilla JS. Along with captivating design, it has a player vs player mode as well as a player vs AI mode.",
        view:"https://gameit-tictactoe.netlify.app/",
        srcode:"https://github.com/gunjan-exe/Prodigy_WD_03.git"
    },
    {
        imgsrc: dashboard,
        title:"Dashboard - LegallyLinked",
        text: "A static webpage built in vanilla JS that displays the insights of a website that helps clients choose their attorneys.",
        view:"https://legallylinked.netlify.app/"
    },
    {
        imgsrc: game,
        title:"2048",
        text: "Hosting Soon!",
        view:"url.com"
    }
];

export default ProjectCardData;