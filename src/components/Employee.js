
class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    employee: sampleEmployee
    };
    }

render() {
    return (
        <div className="App">
            <DisplayEmployee employee={sampleEmployee} />
        </div>
    );}
}