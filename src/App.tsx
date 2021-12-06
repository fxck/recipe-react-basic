import React from 'react';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import './App.css';
import format from 'date-fns/format';

interface Quote {
  quote: string;
  createdAt: string;
}

interface Props {

}

interface State {
  quote: Quote | undefined;
}

export class App extends React.Component<Props, State> {


  constructor(props: Props) {
    super(props);

    this.state = {
      quote: undefined
    };
  }

  componentDidMount() {

    const regex = /^(https:\/\/)app-([^-.]+)([^\/]*).*$/gm;
    const subst = `$1api-$2-1337$3`;
    const url = window.location.href;
    const apiUrl = url.replace(regex, subst);

    axios.post(
      `${apiUrl}/quotes`,
      {
        quote: '„Zerops has beautiful user interface“'
      }
    )
      .then((response) => {
        this.setState({
          quote: response.data
        })
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">

      <h1 className="__title">Welcome to <div className="__zerops">ZEROPS</div> recipe including <div className="__tech">React</div>, connected to <div className="__tech">API</div> and <div className="__tech">database</div></h1>

      <h2 className="__quote-title">Quote loaded from <div className="__tech">database</div></h2>

      <h3 className="__quote">{this.state.quote?.quote}<span className="__author"> - ZEROPS, {((this.state.quote?.createdAt || this.state.quote?.created_at) ? (this.state.quote?.createdAt ? format(new Date(this.state.quote?.createdAt), 'MM/dd/yyyy') : format(new Date(this.state.quote?.created_at), 'MM/dd/yyyy')): '')}</span></h3>

      <div className="__checklist">

        <h3 className="__checklist-title"><strong>Your next steps?</strong></h3>

        <div className="__checklist-item">
          <Checkbox></Checkbox>
          Fork repository
        </div>

        <div className="__checklist-item">
          <Checkbox></Checkbox>
          Open build and deploy settings and connect
        </div>

        <div className="__checklist-item">
          <Checkbox></Checkbox>
          Push a new commit
        </div>

      </div>

    </div>
    )
  }
}
