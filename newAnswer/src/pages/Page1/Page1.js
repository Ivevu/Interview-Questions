import React, { Component } from 'react';
import styles from './Page1.less'
import img from './mine_selected.png'
export default class Page1 extends Component {
    render() {
        return (
            <div className={styles.box}>
                this is Page1~
                <img src={img} alt="" />
            </div>
        )
    }
}