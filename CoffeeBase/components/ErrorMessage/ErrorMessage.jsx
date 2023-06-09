import styles from "./error.style";
import { View, Text, TouchableOpacity } from "react-native";
import "../../locales/index";
import { useTranslation } from "react-i18next";

const ErrorMessage = ({ m, onRetry }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{m}</Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryButtonText}>{t("rtr")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorMessage;
