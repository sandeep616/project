import ToggleBox from "./ToggleBox";
import Vehicles from "./Vehicles";
import React from 'react';
import './App.css';

export default function ComboBox() {
    return (
      <ToggleBox title="">
				<Vehicles />
			</ToggleBox>

    )
}