// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.gardensongdesign.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.gardensongdesign.com/","title_tag":"Landscaping Design Plans Patios Walkways Harford | Garden Song Design","meta_description":"Landscaping design plans, plantings, patios, walkways and renovations in Harford and Baltimore County MD by a Certified Professional Horticulturist."},{"page_url":"https://www.gardensongdesign.com/Landscaping","title_tag":"Landscaping Design Plans Plantings Patios Walkways | Garden Song","meta_description":"Custom landscaping design plans, plantings, patios, walkways and hardscaping in Harford and Baltimore County MD by a Professional Horticulturist."},{"page_url":"https://www.gardensongdesign.com/gallery","title_tag":"Landscaping Design Plans Plantings Gallery Harford | Garden Song","meta_description":"View plantings used in landscaping design plans and garden renovations by Garden Song Design, Professional Horticulturist serving Harford and Baltimore MD."},{"page_url":"https://www.gardensongdesign.com/contact","title_tag":"Garden Consultations Landscaping Design Harford MD | Garden Song","meta_description":"Contact Garden Song Design in Bel Air MD for garden consultations, landscaping design plans, patios, walkways and landscape renovations in Harford County."},{"page_url":"https://www.gardensongdesign.com/services","title_tag":"Landscape Renovations Self Install Plans Harford MD | Garden Song","meta_description":"Landscape renovations, self install landscape plans, garden consultations and patios in Harford and Baltimore County MD by a Certified Professional Horticulturist."},{"page_url":"https://www.gardensongdesign.com/events","title_tag":"Workshops Presentations Garden Consultations Harford | Garden Song","meta_description":"Seasonal garden workshops, presentations and floral design events by a Professional Horticulturist serving Harford and Baltimore County Maryland."}],"keywords":["landscaping design plans plantings patios walkways harford baltimore","garden consultations","landscape renovations baltimore harford maryland","professional horticulturist","self install landscape plans","workshops presentations"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.gardensongdesign.com/#localbusiness",
  "name": "Garden Song Design",
  "url": "https://www.gardensongdesign.com/",
  "description": "Garden Song Design provides professional landscape design, installation, hardscaping, garden consultations, workshops and winter floral design services in Harford County, Baltimore County, Cecil County Maryland and surrounding areas. Led by landscape designer and Certified Professional Horticulturist Paula Simons, the company creates beautiful, affordable outdoor spaces for everyday living.",
  "image": [
    "https://static.wixstatic.com/media/a957db_d97b625dc29848e6a73b5c780f7c17c7~mv2.jpg/v1/fill/w_333,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/paulafinalprofile.jpg"
  ],
  "telephone": "+1-410-836-2700",
  "email": "gardensongdesign@gmail.com",
  "areaServed": [
    {
      "@type": "City",
      "name": "Bel Air",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bel Air",
        "addressRegion": "MD",
        "addressCountry": "US"
      }
    },
    {
      "@type": "AdministrativeArea",
      "name": "Harford County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Baltimore County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Cecil County"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bel Air",
    "addressRegion": "MD",
    "addressCountry": "US"
  },
  "founder": {
    "@type": "Person",
    "name": "Paula Alexander Simons",
    "jobTitle": "Landscape Designer, Certified Professional Horticulturist, Specialist in Herbaceous Perennials, Garden Consultant, Floral Designer, Workshop Instructor, Public Speaker",
    "telephone": "+1-410-836-2700",
    "image": "https://static.wixstatic.com/media/a957db_d97b625dc29848e6a73b5c780f7c17c7~mv2.jpg/v1/fill/w_333,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/paulafinalprofile.jpg"
  },
  "sameAs": [],
  "serviceArea": {
    "@type": "AdministrativeArea",
    "name": "Harford County MD and surrounding areas"
  },
  "slogan": "Creating beautiful, affordable outdoor spaces for everyday living",
  "knowsAbout": [
    "landscape design",
    "landscape installation",
    "hardscaping",
    "walkways",
    "patios",
    "retaining walls",
    "perennial gardens",
    "foundation plantings",
    "pool plantings",
    "erosion issues",
    "real estate sales preparation landscaping",
    "DIY landscape plans",
    "garden consultations",
    "garden workshops",
    "winter floral design",
    "seasonal planters",
    "wreath workshops"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Garden Song Design Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Complete Landscape Design, Install and Estimating Services",
          "description": "Custom landscape plans, estimates and full installation based on homeowner needs, preferences and site conditions, using high quality plants, hardscaping materials and vetted contractors."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Landscape Renovations",
          "description": "Renovation and updating of existing landscapes, improving curb appeal, plant health and overall garden design."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Real Estate Sales Preparation Landscaping",
          "description": "Landscape improvements and clean-up to prepare properties for real estate sales and showings."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pool Plantings",
          "description": "Landscape and planting design around pools to create attractive, functional outdoor living spaces."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Walkways, Patios and Retaining Walls",
          "description": "Design and coordination of hardscaping projects including stone, paver, concrete, block and gravel walkways, patios and retaining walls with experienced contractors."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solutions for Problem Planting Areas and Erosion Issues",
          "description": "Diagnosing and solving issues in difficult planting areas, including soil, drainage and erosion problems."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "\"Self-install\" Landscape Plans for DIY Homeowners",
          "description": "Professional landscape and planting plans created for homeowners who want to install their own landscapes, including plant lists, placement and guidance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Garden Consultations and Presentations",
          "description": "On-site garden consultations for homeowners and gardeners, plus educational presentations on gardening topics.",
          "provider": {
            "@type": "Person",
            "name": "Paula Alexander Simons"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Workshops",
          "description": "Fun and informative gardening and floral design workshops, including wreaths, planters, kitchen gardens and seasonal projects."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Winter Floral Design",
          "description": "Custom winter and holiday floral designs including centerpieces, wreaths, swags, mantlepieces, sleighs, cemetery wreaths and blankets, and commercial decorating."
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
