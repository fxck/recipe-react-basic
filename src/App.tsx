import React from 'react';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import './App.css';
import format from 'date-fns/format';

interface Quote {
  quote: string;
  createdAt: string;
  created_at: string;
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
        hello

    </div>
    )
  }
}
