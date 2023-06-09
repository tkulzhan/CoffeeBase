import styles from "./error.style";
import { View, Text, TouchableOpacity } from "react-native";
import "../../locales/index";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const ErrorMessage = ({ m, onRetry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{m}</Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryButtonText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorMessage;
