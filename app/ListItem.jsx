import React from 'react';

class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.forClick = this.forClick.bind(this);
        this.render = this.render.bind(this);
    }

    forClick() {
        this.props.onClick(this.props.mkey)
    }

    render() {
        return <li className="menuitem" onClick={this.forClick}>{this.props.content}</li>
    }
}

ListItem.propTypes = {
    content: React.PropTypes.string.isRequired,
    mkey: React.PropTypes.string.isRequired
}

export default ListItem