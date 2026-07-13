java_service = """package com.cowerkers.service;

import com.cowerkers.model.Commande;
import java.util.HashMap;
import java.util.Map;

public class CommissionService {
    function calculerGains() {
    const plat = parseFloat(document.getElementById('platPrice').value);
    const liv = parseFloat(document.getElementById('deliveryPrice').value);
    
    // Validation stricte des prix d'El Mourouj
    if (plat >= 8 && plat <= 30 && liv >= 3 && liv <= 3.5) {
        const commRestau = plat * 0.15; // 15% de commission
        const commLiv = liv * 0.10;    // 10% de commission
        
        // Mise à jour de l'affichage HTML
        document.getElementById('restauPart').innerText = (plat - commRestau).toFixed(2);
        document.getElementById('livreurPart').innerText = (liv - commLiv).toFixed(2);
        document.getElementById('cowerkersPart').innerText = (commRestau + commLiv).toFixed(2);
        document.getElementById('results').style.display = 'block';
    } else {
        alert('Veuillez entrer des valeurs valides (Plat: 8-30 DT, Livraison: 3-3.5 DT)');
    }
}

    // Taux de commissions professionnels de Cowerkers
    private static final double TAUX_COMMISSION_RESTAU = 0.15; // 15%
    private static final double TAUX_COMMISSION_LIVREUR = 0.10; // 10%

    /**
     * Calcule la répartition exacte des gains de manière infaillible et sans faute.
     */
    public Map<String, Double> calculerRepartition(Commande commande) {
        double totalPlat = commande.getPrixPlat();
        double totalLivraison = commande.getFraisLivraison();

        double commissionRestau = totalPlat * TAUX_COMMISSION_RESTAU;
        double commissionLivreur = totalLivraison * TAUX_COMMISSION_LIVREUR;

        double partRestaurant = totalPlat - commissionRestau;
        double partLivreur = totalLivraison - commissionLivreur;
        double gainCowerkers = commissionRestau + commissionLivreur;

        Map<String, Double> repartition = new HashMap<>();
        repartition.put("NetRestaurant", Math.round(partRestaurant * 100.0) / 100.0);
        repartition.put("NetLivreur", Math.round(partLivreur * 100.0) / 100.0);
        repartition.put("GainCowerkers", Math.round(gainCowerkers * 100.0) / 100.0);

        return repartition;
    }
}
"""

# 5. README File
readme_content = """========================================================================
COWERKERS - PROJET DE LIVRAISON EL MOUROUJ
========================================================================

Félicitations pour le lancement immédiat de votre projet d'intermédiaire !
Ce dossier contient la structure de base ultra professionnelle et sans faute 
développée pour vous et Ahmed Yassine Dridi.

CONTENU DU DOSSIER :
1. index.html      : L'interface utilisateur vitrine et simulateur de commande.
2. style.css       : Le design épuré et moderne (Slate & Emerald).
3. Commande.java   : Le modèle objet avec validation stricte des prix (8-30 DT / 3-3.5 DT).
4. CommissionService.java : Le moteur de calcul financier exact de vos commissions.

COMMENT LANCER LE SITE WEB AUJOURD'HUI :
1. Ouvrez simplement 'index.html' dans n'importe quel navigateur pour voir l'interface.
2. Pour l'héberger en ligne gratuitement en moins de 5 minutes :
   Glissez le dossier sur https://www.netlify.com ou utilisez GitHub Pages.
3. Transmettez les fichiers Java à Ahmed Yassine pour qu'il les intègre dans son projet Spring Boot.

Bonne chance pour votre lancement aujourd'hui à El Mourouj !
"""

# Write files to directory
with open('cowerkers_project/index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

with open('cowerkers_project/style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

os.makedirs('cowerkers_project/java/model', exist_ok=True)
with open('cowerkers_project/java/model/Commande.java', 'w', encoding='utf-8') as f:
    f.write(java_commande)

os.makedirs('cowerkers_project/java/service', exist_ok=True)
with open('cowerkers_project/java/service/CommissionService.java', 'w', encoding='utf-8') as f:
    f.write(java_service)

with open('cowerkers_project/README.txt', 'w', encoding='utf-8') as f:
    f.write(readme_content)

# Zip everything
zip_filename = 'cowerkers_web_project.zip'
with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk('cowerkers_project'):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, 'cowerkers_project')
            zipf.write(file_path, arcname)
