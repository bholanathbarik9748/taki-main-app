import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {AlertComponentProps} from './types/types';

const AlertComponent: React.FC<AlertComponentProps> = ({
  title,
  message,
  cancelText,
  okText,
  okAction,
  closeAction,
}) => {
  useEffect(() => {
    if (message) {
      const alertButtons = [
        {
          text: cancelText || 'Cancel', // Ensure cancelText is a string
          onPress: () => closeAction && closeAction(),
        },
      ];

      // Only add OK button if okText or okAction is provided
      if (okText || okAction) {
        alertButtons.push({
          text: okText || 'OK', // Ensure okText is a string, or use a default value
          onPress: () => okAction && okAction(),
        });
      }

      Alert.alert(
        title || 'Alert', // Provide a default title if not provided
        message, // Dynamic Message
        alertButtons,
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null; // No UI, just showing the alert
};

export default AlertComponent;
