import React from 'react'
import PropTypes from 'prop-types'


class Add extends React.Component {
	state = {
		name: '',
		text: '',
		bigText: '',
		agree: false,
	}

	handleClick = (e) => {
		e.preventDefault()
		const { name, text, bigText } = this.state
		this.props.onAddNews({ 
			id: +new Date(), 
			author: name, 
			text, 
			bigText
		})
	}

	handleChange = (e) => {
		const { id, value } = e.currentTarget
		this.setState({ [id]: value })
	}

	handleCheck = (e) => {
		this.setState({ agree: e.currentTarget.checked })
	}

	validate = () => {
		const { name, text, bigText, agree } = this.state
		return !(name.length && text.length && bigText.length && agree)
	}

	render() {
		const { name, text, bigText } = this.state
		return (
			<form className='add'>
				<input 
					id='name'
					type='text'
					className='add__author'
					placeholder='Ваше имя'
					onChange={this.handleChange}
					value = {name}
				/>
				<textarea
					id='text'
					className='add__text'
					placeholder='Текст новости'
					onChange={this.handleChange}
					value = {text}
				></textarea>
				<textarea
					id='bigText'
					className='add__big-text'
					placeholder='Дополнительный текст'
					onChange={this.handleChange}
					value = {bigText}
				></textarea>
				<label className='add__checkrule'>
					<input type='checkbox' onClick={this.handleCheck} /> Я согласен с правилами
				</label>
				<button
					className='add__btn'
					disabled={this.validate()}
					onClick={this.handleClick}>
					Добавить новость
				</button>
			</form>
		)
	}
}

Add.propTypes = {
	onAddNews: PropTypes.func.isRequired,
}

export { Add }