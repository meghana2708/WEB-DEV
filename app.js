const container = document.getElementById("map")
const content = React.createElement('div', {}, [
        React.createElement('h1', {}, 'I am a heading'),
        React.createElement('p', {}, 'I am a paragraph')

    ]) //to create a virtual dom

ReactDOM.render(content, container) //to display