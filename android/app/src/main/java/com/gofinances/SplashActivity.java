package com.gofinances; // Altere para o seu pacote

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // Adicione esse import
import android.os.Bundle; // Adicione esse import

public class MainActivity extends ReactActivity {
    // Adicione esse método
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
}