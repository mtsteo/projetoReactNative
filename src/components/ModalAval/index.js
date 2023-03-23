import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

// import { Container } from './styles';

const ModalAval = () => {
    return (

        <Modal isVisible>
            <View style={{ flex: 1 }}>
                <Text>Hello!</Text>

                <Button title="Hide modal" />
            </View>
        </Modal>

    );
}

export default ModalAval;