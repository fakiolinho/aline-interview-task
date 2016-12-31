import React from 'react';

class Contact extends React.Component {

    state = { username : '', password : '' };

    sendmail = props => this.props.sendmail(this.state.name, this.state.email, this.state.message);

    onChange = event => {
        this.state[event.target.id] = event.target.value;
        return this.state;
    }

    render() {
        const {sendmail} = this.props
        return (
            <div>
                <h1>Contact</h1>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-4">
                            <input type="name" className="form-control" onChange={this.onChange} id="name" placeholder="Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-4">
                            <input type="email" className="form-control" onChange={this.onChange} id="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-2 control-label">Message</label>
                        <div className="col-sm-4">
                            <textarea className="form-control" onChange={this.onChange} id="message" placeholder="message" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" onClick={this.sendmail} className="btn btn-default">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;