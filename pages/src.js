import React, { Component } from "react";
import { render } from "react-dom";

const Stocks = ({ items }) => (
    <div className="table-responsive">
    <table className="table">
      <tbody>
        {items.map(item => (
          <tr>
            <td>{item["gsx$a"]["$t"]}</td>
<td>{item["gsx$b"]["$t"]}</td>
<td>{item["gsx$c"]["$t"]}</td>
<td>{item["gsx$d"]["$t"]}</td>
<td>{item["gsx$e"]["$t"]}</td>
<td>{item["gsx$f"]["$t"]}</td>
<td>{item["gsx$g"]["$t"]}</td>
<td>{item["gsx$h"]["$t"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetch(
                "https://spreadsheets.google.com/feeds/list/1wMd9FL2Pv2yz4M0eT6Bn-B4MaTG_3WO1XdkibDiUS5Y/1/public/full?alt=json"
            )
            .then(data => data.json())
            .then(jsonData => {
                this.setState({
                    data: jsonData.feed.entry.reverse()
                });
            });
    }
    render() {
        if (this.state.data.length > 0) {
            console.log(JSON.stringify(this.state.data, null, 4));
            return <Stocks items={this.state.data} />;
        }
        return <p>Loading....</p>;
    }
}

render(<App />, document.getElementById("root"));