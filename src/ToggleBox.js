import React from "react";
import icona from "./list.png";
import iconmenu from "./menu.png";

class ToggleBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.toggleBox = this.toggleBox.bind(this);
	}
  
	toggleBox() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}
  
	render() {
		let { title, children } = this.props;
		const { opened } = this.state;
		console.log("state",opened)
		const getImage=(title)=>{
			console.log("this.state.opened",this.state.opened)
			console.log("title",title)

			if (this.state.opened && title===""){		
					return <img className="imgno" width="25" src={iconmenu} alt="none veh" border="0"/>
					
			}else{
				return <img className="imgno" width="30" src={icona} alt="none1" border="0"/>

			}
		}
		return (
			<div className="box">
				<div className="boxTitle" onClick={this.toggleBox}>
					{title}
					{this.state.opened}
					{getImage(this.props.title)}
				</div>
				{opened && (		
					<div class="boxContent">
						{children}
					</div>
				)}
			</div>
		);
	}
}

export default ToggleBox;