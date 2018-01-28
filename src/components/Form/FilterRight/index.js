import React, {Component} from 'react'
import {connect} from 'react-redux'
import {checkedSun, checkedHeart, checkedFlash, checkedFlower} from '../../../AC/index'
import './style.less'
class FilterRight extends Component {

    /*handle = () => {
     let elems = Array.from(this.form.elements);
     let input = elems.filter(elem => elem.checked);
     console.log(input);
     input.map(item => item.labels[0].classList.add('turnOn'))
     }*/

    render() {
        const {isCheckedSun, isCheckedHeart, isCheckedFlash, isCheckedFlower, checkedSun, checkedHeart, checkedFlash, checkedFlower} = this.props;
        return (
            <div className="filter-right">
                <form className="main_form">
                    <label htmlFor="sun">
                        <img className={`form_image-${isCheckedSun ? 'turnOn' : 'turnOff'}`} src="/src/img/sun.svg"/>
                    </label>
                    <input type='checkbox' id="sun" value='sun' onChange={(event) => checkedSun(event.target.checked)}
                           checked={isCheckedSun}/>
                    <label htmlFor="flash">
                        <img className={`form_image-${isCheckedFlash ? 'turnOn' : 'turnOff'}`}
                             src="/src/img/flash.svg"/></label>
                    <input type="checkbox" id="flash" value='flash'
                           onChange={(event) => checkedFlash(event.target.checked)} checked={isCheckedFlash}/>
                    <label htmlFor="flower">
                        <img className={`form_image-${isCheckedFlower ? 'turnOn' : 'turnOff'}`}
                             src="/src/img/flower.svg"/>
                    </label>
                    <input type="checkbox" id="flower" value='flower'
                           onChange={event => checkedFlower(event.target.checked)} checked={isCheckedFlower}/>
                    <label htmlFor="heart">
                        <img className={`form_image-${isCheckedHeart ? 'turnOn' : 'turnOff'}`}
                             src="/src/img/heart.svg"/>
                    </label>
                    <input type="checkbox" id="heart" value='heart'
                           onChange={event => checkedHeart(event.target.checked)} checked={isCheckedHeart}/>
                </form>
            </div>)
    }
}

export default connect(({filter: {isCheckedSun, isCheckedHeart, isCheckedFlash, isCheckedFlower}}) => ({
            isCheckedSun: isCheckedSun.checked,
            isCheckedHeart: isCheckedHeart.checked,
            isCheckedFlash: isCheckedFlash.checked,
            isCheckedFlower: isCheckedFlower.checked
        }
    ),
    {checkedSun, checkedHeart, checkedFlash, checkedFlower})(FilterRight)
