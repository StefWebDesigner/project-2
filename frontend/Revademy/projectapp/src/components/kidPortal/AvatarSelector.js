import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import GirlAvatar from "../avatars/girl_avatar.png";
import BoyAvatar from "../avatars/boy_avatar.png";
import DuckAvatar from "../avatars/duck_avatar.png";
import './kidportal.css';

                       
    const AvatarSelector = () => {


        const [isModalVisible, setIsModalVisible] = useState(false);

        const showModal = () => {
          setIsModalVisible(true);
        };
      
        const handleOk = () => {
          setIsModalVisible(false);
        };
      
        const handleCancel = () => {
          setIsModalVisible(false);
        };

    return (
   
        <div className="avatar-selector">
                <h3 className='avatar-header'>Select Your Avatar</h3>
                <Button type="primary" onClick={showModal}>
                    Open Modal
                 </Button>
                <Modal title="Kid Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <form>
                <div>
                <input id="a1" type="radio" name="a" value="duck" />
                <label for="a1">Duck</label><br/>
                <input id="a2" type="radio" name="a" value="girl" />
                <label for="a2">Girl</label>
                <input id="a2" type="radio" name="a" value="boy" />
                <label for="a2">Boy</label>
                </div>
                <div class="pic-selector">
                <input id="duck" type="radio" name="avatar-pic" value="duck" />
                <label class="avatar-pic duck" for="duck"></label>
                <input id="girl" type="radio" name="avatar-pic" value="girl" />
                <label class="avatar-pic girl"for="girl"></label>
                <input id="boy" type="radio" name="avatar-pic" value="boy" />
                <label class="avatar-pic boy"for="boy"></label>
                </div>
                </form>
                    <p>Hello</p>
                </Modal>
                
        </div>
      
    );
};

export default AvatarSelector;
