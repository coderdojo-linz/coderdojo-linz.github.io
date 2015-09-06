---
layout: sushi
title: Getafix Magic Potion
description: In dieser Episode wirst du noch mehr über Events lernen und außerdem lernen, wie du eine Reihe von Dingen abspeicherst
---

# Getafix vergibt seinen Zaubertrank
In der letzten Episode haben wir gelernt, wie man auf Events horchen und reagieren kann. Heute werden wir das anwenden indem wir unser Getafix-Plugin erweitern, sodass man Spielern einen Zaubertrank verabreichen kann: 

    /magigpotion OidaZocktYT

Mit diesem Kommando (das natürlich wieder nur von ops verwendet werden darf) ist der Spieler *OidaZocktYT* unbesiegbar, das heißt, er verliert keine Gesundheit mehr. Kommen wir noch dazu, das auch mit Zeitablauf zu machen?

![How the command looks like](06_getafix-Arguments/Command.png)

## Der Event-Handler
Wir beginnen mit dem Bauen des Event-Handlers, das dir schon vom letzten Mal bekannt ist. Ich sage dir nur den Namen des Events, damit du weißt, welchen Parameter du verwenden sollst: `EntityDamageEvent`. Damit kannst du mit der *Zusammenfassung für Profis* aus der letzten Episode den Event-Handler aufbauen. Bau ihn einfach so, dass beim Auftreten des Events auf der Console eine Info "Outch, something got damaged" oder so ähnlich ausgegeben wird.

Bauen, testen, wann wird der Handler immer aufgerufen? 

## Das `EntityDamageEvent`


## Ein erster Versuch
Mit `setHealth(20)`. Was passiert dann?

## Ein Event canceln

## Spieler speichern
Jetzt können wir den Event des Damage abfangen. Das passiert aber immer und für alle Spieler. Wir jetzt nur die Spieler, welche den Zaubertrank bekommen haben, 

* Einführung von PotionPot
* Implementierung mit TreeSet

## Ein wenig zusammenräumen


## Ideen für weitere Entwicklungen
Der Zaubertrank soll natürlich nicht unendlich lange wirken. Das werden wir in der nächsten Episode fixen. Außerdem werden wir die Behandlung der einzelnen Kommandos ein wenig zusammenräumen. 