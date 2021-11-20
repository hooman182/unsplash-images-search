import React from 'react';
import imageIcon from "../assets/img/image-icon.png";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue: ""
        }
    }
    formSubmit = (e) => {
        this.props.onFormSubmit(this.state.formValue);
        this.setState({ formValue: "" });
        e.preventDefault();
    }
    inputOnChange = (e) => {
        this.setState({ formValue: e.target.value });
    }
    render() {
        return (
            <header className="bg-gray-200 flex justify-between items-center md:px-5">
                <img src={imageIcon} alt="image icon" className="" />
                <form method="post" onSubmit={this.formSubmit} className="flex-grow mx-6">
                    <input
                        type="text"
                        placeholder="Search on unsplash..."
                        value={this.state.formValue}
                        onChange={this.inputOnChange}
                        className="w-full outline-none p-2.5"
                    />
                </form>
            </header>
        )
    }
}

export default Header;
