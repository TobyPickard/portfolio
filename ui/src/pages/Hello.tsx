import { Button } from "@mui/material";

const Hello = () => {
    const handleClick = () => {
        const element = document.getElementById('projects');
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div id='hello'>
            <h1 style={{ paddingTop: '50px', display:'flex', justifyContent: 'center', alignItems:'center'}}>Hello</h1>
            <div style={{ display:'flex', justifyContent: 'center', alignItems:'center', paddingBottom: '50px'}}>
                <Button onClick={handleClick}>Projects</ Button>
            </div>
        </div>
    );
};

export default Hello;
