/*
 * Copyright ©2015. Created by P. Bauer <p.bauer@htl-leonding.ac.at>, Department
 * of Informatics and Media Technique and Design, HTBLA Leonding, Limesstr. 12 - 14,
 * 4060 Leonding, AUSTRIA. All Rights Reserved. Permission to use, copy, modify,
 * and distribute this software and its documentation for educational,
 * research, and not-for-profit purposes, without fee and without a signed
 * licensing agreement, is hereby granted, provided that the above copyright
 * notice, this paragraph and the following two paragraphs appear in all
 * copies, modifications, and distributions. Contact the Head of Informatics,
 * Media Technique and Design, HTBLA Leonding, Limesstr. 12 - 14, 4060 Leonding,
 * Austria, for commercial licensing opportunities.
 * 
 * IN NO EVENT SHALL HTBLA LEONDING BE  LIABLE TO ANY PARTY FOR DIRECT,
 * INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST
 * PROFITS, ARISING OUT OF THE USE OF THIS SOFTWARE AND ITS DOCUMENTATION,
 * EVEN IF HTBLA LEONDING HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * HTBLA LEONDING SPECIFICALLY DISCLAIMS ANY WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE. THE SOFTWARE AND ACCOMPANYING DOCUMENTATION, IF ANY,
 * PROVIDED HEREUNDER IS PROVIDED "AS IS". HTBLA LEONDING HAS NO OBLIGATION
 * TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS, OR MODIFICATIONS.
 */
package com.bajupa.getafix;

import org.bukkit.Bukkit;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.bukkit.plugin.java.JavaPlugin;

/**
 *
 * @author P. Bauer <p.bauer@htl-leonding.ac.at>
 */
public class Getafix extends JavaPlugin {

    @Override
    public void onEnable() {
        getServer().getPluginManager().registerEvents(new DamageEventListener(), this);
    }

    
    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (!commandCanBeHandled(sender, args)) {
            return false;
        }

        String playerName = args[0];    // first argument is player name
        Player player = getPlayer(playerName, sender);

        if (playerIsOffline(player, sender, playerName)) {
            return false;
        }

        handleCommand(label, player);
        return true;
    }

    private boolean commandCanBeHandled(CommandSender sender, String[] args) {
        if (!(sender instanceof Player) || !sender.isOp()) {
            sender.sendMessage("Command can only be used by player who is op");
            return false;
        }
        return args.length == 1;
    }

    private Player getPlayer(String playerName, CommandSender sender) {
        Player player;
        if (playerName.equalsIgnoreCase("me")) {
            player = (Player) sender;
        } else {
            player = Bukkit.getPlayer(playerName);
        }
        return player;
    }

    private boolean playerIsOffline(Player player, CommandSender sender, String playerName) {
        if (player == null) {
            sender.sendMessage("Player " + playerName + " is not online");
            return true;
        }
        return false;
    }

    private void handleCommand(String label, Player player) {
        if (label.equalsIgnoreCase("gethealth")) {
            player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
        } else {
            player.setHealth(20.);
        }
    }
}
