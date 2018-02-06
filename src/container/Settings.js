import React from 'react';

const Settings = props =>
    (
        <div>
            <h1>Options</h1>
            <h2>Set Sound</h2>
        <select size = "5">
            <option value="0">Mute</option>
            <option value="0.25">25%</option>
            <option value="0.5">50%</option>
            <option value="0.75">75%</option>
            <option value="1.0">100%</option>
        </select>


            <h2>Set Times (minutes)</h2>
            <label>Short Break</label>
            <input type="number" step="1" min="1"  onChange = {props.session}/>
            <label>Short Break</label>
            <input type="number" step="1" min="1"  onChange = {props.shortBreak}/>
            <label>Long Break</label>
            <input type="number" step="1" min="1"  onChange = {props.longBreak}/>

        </div>
    );

export default Settings;