import styles from "./error.style";
import { View, Text, TouchableOpacity } from "react-native";

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
