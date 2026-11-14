"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Play } from "@/components/icons";
import { onlineClassVideos } from "@/lib/site-data";

function readYouTubeId(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    let candidate = "";
    if (host === "youtu.be") candidate = parsed.pathname.split("/").filter(Boolean)[0] ?? "";
    else if (["youtube.com", "m.youtube.com", "youtube-nocookie.com"].includes(host)) {
      candidate = parsed.searchParams.get("v") ?? parsed.pathname.split("/").filter(Boolean).at(-1) ?? "";
    }
    return /^[A-Za-z0-9_-]{11}$/.test(candidate) ? candidate : "";
  } catch {
    return /^[A-Za-z0-9_-]{11}$/.test(url.trim()) ? url.trim() : "";
  }
}

export function OnlineClassSection() {
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <section className="online-class-section" id="online-learning" aria-labelledby="online-class-title">
      <div className="container online-class-layout">
        <div className="online-class-copy">
          <h2 id="online-class-title">Classroom coaching, recorded for you</h2>
          <p>Attend classes at the academy, then rewatch them on YouTube when you need to revise or catch up.</p>
          <ul className="online-learning-points">
            <li><strong>Attend classes at the academy</strong><small>Learn in person with your teachers.</small></li>
            <li><strong>Watch the recordings on YouTube</strong><small>Revisit a lesson or catch up on your own schedule.</small></li>
            <li><strong>Choose your exam pathway</strong><small>Find preparation routes for NDA, SSB and more.</small></li>
          </ul>
          <div className="online-class-actions">
            <Link className="button button-dark" href="/admissions">Ask about classes <ArrowRight size={16} /></Link>
            <Link className="text-link" href="/programs">Explore programs <ArrowRight size={14} /></Link>
          </div>
        </div>

        <div className="online-class-view">
                    <div className="video-stack" aria-label="Featured class videos">
            {onlineClassVideos.map((video, index) => {
              const isActive = index === activeVideo;
              const position = index === (activeVideo + 1) % onlineClassVideos.length ? "video-card-back-top" : "video-card-back-bottom";
              const videoId = readYouTubeId(video.youtubeUrl);
              const player = videoId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
                  title={`${video.title} — class preview`}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="video-empty-state">
                  <span className="video-play-mark"><Play size={18} /></span>
                  <strong>Class video coming soon</strong>
                </div>
              );

              return isActive ? (
                <article className="video-card video-card-active" key={video.id}>
                  <div className="video-card-screen">{player}<span className="video-live-label">{video.badge}</span></div>
                  <div className="video-card-info"><div><strong>{video.title}</strong><small>{video.category}</small></div></div>
                </article>
              ) : (
                <button className={`video-card video-card-selectable ${position}`} key={video.id} type="button" onClick={() => setActiveVideo(index)} aria-label={`Select ${video.title}`}>
                  <div className={`video-card-screen video-placeholder-${index + 1}`}><span className="mini-play"><Play size={14} /></span><span className="video-back-title">{video.category}</span></div>
                  <span className="video-card-info"><span><strong>{video.title}</strong><small>{video.category}</small></span></span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}