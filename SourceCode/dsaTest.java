import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class dsaTest {

    private static WebDriver driver;

    @BeforeClass
    public static void setUp() {
        System.setProperty("webdriver.chrome.driver","chromedriver.exe");
        driver = new ChromeDriver();
    }

    // test to unsure our login pops up on a search engine
    @Test
    public void testGoogle() {
        driver.get("https://www.google.com");
        WebElement searchBox = driver.findElement(By.name("q"));
        searchBox.sendKeys("C:/Users/agape/Desktop/github/DSA_2/dsa/DSA(HTML_CSS)/login.html");
        searchBox.submit();
        Assert.assertTrue(driver.getTitle()
                .contains("C:/Users/agape/Desktop/github/DSA_2/dsa/DSA(HTML_CSS)/login.html"));
    }

    // test to unsure our signup pops up on a search engine
    @Test
    public void testGoogle2() {
        driver.get("https://www.google.com");
        WebElement searchBox = driver.findElement(By.name("q"));
        searchBox.sendKeys("C:/Users/agape/Desktop/github/DSA_2/dsa/DSA(HTML_CSS)/signup.html");
        searchBox.submit();
        Assert.assertTrue(driver.getTitle()
                .contains("C:/Users/agape/Desktop/github/DSA_2/dsa/DSA(HTML_CSS)/signup.html"));
    }

    // to to confirm insert to table
    @Test
    public void testTableConfirmation() throws SQLException {
        DatabaseMetaData databaseMetaData = null;
        Connection connection = databaseMetaData.getConnection();
        connection.prepareStatement("Insert into users" + "values (2, 'fan', '12345', 'alex', 'ad'," +
                " 'daniel', 'ad@yahoo.com', '1234567890', 'enterprise systems', 'junior', 1)").execute();
        assertTrue(
                connection.prepareStatement("Select * from users").executeQuery().next()
        );
    }
}
