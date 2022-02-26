import React, { Component } from 'react'
import { Button } from './StyledComponents/Button'
import { ModalContainer } from './StyledComponents/ModalContainer'
import { Input, TextField } from './StyledComponents/TextGroup'

export default class Modal extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="editTaskModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <ModalContainer  className="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit Task</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <Input></Input>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <Button type="button" data-dismiss="modal">Save changes</Button> 
                                </div>
                        </ModalContainer>
                    </div>
                </div>
                </div>
        )
    }
}


