import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Label, Row, Col, Button, Form, FormGroup } from 'reactstrap'
import actionCreators from '../store/actions'

class AquariumInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputString: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleClick(e) {
    e.preventDefault()
    this.props.setInput(this.state.inputString)
    this.props.getInputArray()
  }

  render() {
    return (
      <Row className="mt-4">
        <Col xs={{ size: 8, offset: 2 }}>
          <Form inline>
            <FormGroup>
              <Label className="mr-2">Input string</Label>
              <Input
                className="mr-2"
                type="text"
                name="inputString"
                value={this.state.inputString}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button onClick={this.handleClick}>Save</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(AquariumInput)
