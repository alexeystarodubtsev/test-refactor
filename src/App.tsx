import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Element { id: number; title: string; }

const COUNT_PART_ELEMENTS = 20;
function App() {
    // list - List of items that can be updated with new additional items when the button is pressed
    const [list, setList] = React.useState<Element[]>([]);

    const getRandomTitle = function () {
        const result = [];
        const randomString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 10; i++) {
            result.push(randomString.charAt(Math.floor(Math.random() *
                randomString.length)));
        }
        return result.join('');
    }
    const fill = () => {
        // The function fills the list for render with some items
        setList(prevList => {
            const newArray: Element[] = [...prevList];
            Array(COUNT_PART_ELEMENTS).fill(0).forEach((_, index) => {
                newArray.push({
                    id: index, title: getRandomTitle()
                })
            })
            return newArray;
        });
    }

    React.useEffect(() => {
        // Fills the List onmount
        fill();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const render = () => {
        // renders the list of items as components
        return list.map((element, index) => (
            <div key={String(index)} className={'App-item'}>{'Title is: ' + element.title + '!'}</div>
        ));
    }

    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div>
                <button
                    className={"App-button"}
                    onClick={fill}
                >
                    Add More
                </button>
            </div>
            <div>
                {render()}
            </div>
        </div>
    );
}

export default App;
