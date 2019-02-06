import React from 'react'
import { withRouter } from 'react-router-dom'
import './Raid.scss'

const RaidForm = ({ handleChange, handleSubmit, raid }) => (
  <form onSubmit={handleSubmit}>
    <label className="form-text">Raid Boss:</label>
    <input
      name="boss_name"
      placeholder="Raid boss name"
      type="text"
      required minLength="2"
      value={raid.boss_name}
      onChange={handleChange}
    />
    <br />
    <label className="form-text">Time Remaining:</label>
    <input
      className="form-field-text"
      name="time_remaining"
      placeholder="Seconds"
      required type="number"
      min="1"
      max="500"
      value={raid.time_remaining}
      onChange={handleChange}
    />
    <br />
    <button type="submit">SUBMIT</button>
  </form>
)

export default withRouter(RaidForm)
