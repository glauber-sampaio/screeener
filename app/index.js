import { h, render, Component } from 'preact';
import Home from './Home.js';
import MockupInfo from './MockupInfos.js';

export default class App extends Component {
  state = { page: 'home', mount: 'home', animate: false }

  changePage = (page) => {
    console.log("Transition Out")
    this.setState({
      page: page,
      animate: true
    })
    setTimeout(() => {
      this.setState({
        mount: page,
        animate: false
      })

      window.scrollTo(0, 0)
    }, 500)
  }

  render({ }, { page, mount, animate }) {
    return (
      <div>
        <div className={`home ${page === 'add' ? 'transitionOutHome' : 'transitionIn'}`}>
          {mount === 'home' || animate === true ?
            <Home changePage={this.changePage} />
            : null}
        </div>

        <div className={`add ${page === 'add' ? 'transitionIn' : 'transitionOutAdd'}`}>
          {mount === 'add' || animate === true ?
            <MockupInfo changePage={this.changePage} />
            : null}
        </div>
      </div>
    )
  }
}

render(<App />, document.body);
