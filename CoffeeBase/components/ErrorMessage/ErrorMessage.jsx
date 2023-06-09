import defaultStyles from "./error.style";
import lightStyles from "./lightMessage";
import { View, Text, TouchableOpacity } from "react-native";
import "../../locales/index";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { getTheme } from "../../localStorage/LocalStorage";

const ErrorMessage = ({ m, onRetry }) => {
  const { t } = useTranslation();

  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const fetchTheme = async () => {
      const storedTheme = await getTheme();
      if (storedTheme) {
        setTheme(storedTheme);
      }
    };

    fetchTheme();
  }, []);

  const styles = theme === "default" ? defaultStyles : lightStyles;

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
