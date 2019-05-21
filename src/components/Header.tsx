import React from "react";
import { BASE_COLOR } from '../config';

const github_url = 'todo';
const Header = (): any => {
  return (
    <div
      style={{
        backgroundColor: BASE_COLOR,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '50px'
      }}
    >
      <span>
        Qiita Viewer with redux-thunk
      </span>
      <a href={github_url}>Github</a>
    </div>
  )
}

export default Header;