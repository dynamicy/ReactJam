import React from 'react';
import ReactDom from 'react-dom';
import { Button, Modal } from 'react-bootstrap';

class Pop extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({ 
            showModal: false 
        });
    }

    open() {
        this.setState({ 
            showModal: true 
        });
    }

    render() {
        return (
            <div>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={this.open}>
                        Launch demo modal
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

ReactDom.render(
    <Pop />, document.getElementById('app')
);
