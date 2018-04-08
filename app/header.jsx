import React from 'react'
import ReactDOM from 'react-dom'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import ReactMarkdown from 'react-markdown';
import ListItem from './ListItem.jsx';

const lineHeight = 100;
const toolbarStyle = {
    color: 'black',
    height: lineHeight + 10,
    backgroundColor: 'inherit',
    zIndex: 100,
    width: '100%'
}

const fancyWriting = {
    fontSize: '5em' ,
    paddingLeft: 33,
    paddingTop: 5,
    lineHeight: lineHeight + 'px',
}

const displayImage = {
    position: 'relative',
    zIndex: 1,
    minHeight: '100%',
    minWidth: '100%'
}

const hero = {
    position: 'relative',
    zIndex: 1,
    height: '80px',
    width:'100%',
    overflow:'hidden'
}

const alert = {
    borderRadius: '3px',
    border: 'solid 2px grey',
    padding: '12px 69px',
    margin: '5px 40px'
}

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentSelection: 0
        }
        this.changeSelection = this.changeSelection.bind(this);

        if(this.state.key === undefined) {
            // Then it is either the URL, or home.
            if(/\/.+/.test(window.location.pathname)) {
                this.changeSelection(window.location.pathname.substring(1))
            } else {
                this.changeSelection("AboutUs")
            }
        }
        window.onpopstate = (event) => {
            this.changeSelection(event.state.mkey, true)
        }
    }

    changeSelection(key, backSelection=false) {
        const that = this;
        $.ajax({
            url: '/modules/' + key + '.md',
            success: function(cont) {
                that.setState({
                    content: cont,
                    key: key,
                })
                if(!backSelection) {
                    window.history.pushState({mkey: key}, "", key)
                }
                $.getScript(that.state.key.toLowerCase() + "-bundle.js")
            }
        })

    }

    render() {
        var rendered = this.state.content ? <ReactMarkdown source={this.state.content} /> : "Loading..."

        return <div>
            <div className='fullbod'>

                <div className='container'>
                    <div className='header'>
                        YOU
                    </div>
                    <div className='sidebar'>
                        <ul className='sidebarlist'>
                            <ListItem content="FAQ" onClick={this.changeSelection} mkey="FAQ"/>
                            <ListItem content="Hi there" onClick={this.changeSelection} mkey="Wedding"/>
                        </ul>
                    </div>
                    <div className='content'>
                        {rendered}
                    </div>
                </div>
            </div>
        </div>
    }
}

ReactDOM.render(<Header />, document.getElementById('header'))

export default {}