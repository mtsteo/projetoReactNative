import React from 'react';
import { Button, Text } from 'react-native';
import { View } from 'react-native';
import Modal from 'react-native-modal';


const ModalAval = (props) => {
    const [isOpenModal, setIsOpenModal] = React.useState(props.isOpenModal)
    return (
        <Modal isVisible={false}>
            <View style={{ flex: 1 }}>
                <Text>Avaliação</Text>
                <Button onPress={()=>setIsOpenModal(false)} title="Hide modal"  />
            </View>
        </Modal>
    );
}

export default ModalAval;