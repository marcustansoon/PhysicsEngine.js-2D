

const origFetch = window.fetch;

                            window.fetch = async (...args) => {
                              const res = await origFetch(...args);
                              try {
                                const url = args[0] instanceof Request ? args[0].url : args[0];
                                // clone so we don't break the original response
                                const clone = res.clone();
                                // read small chunk safely
                                const text = await clone.text();
                                if (text.includes("#EXTM3U")) {
                                  console.log("1HLS detected:", url);
                                  alert("1HLS detected:"+ url);
                                  if (text.includes("#EXT-X-STREAM-INF")) {
                                    console.log("👉 MASTER PLAYLIST");
                                  } else if (text.includes("#EXTINF")) {
                                    console.log("👉 MEDIA PLAYLIST");
                                    parseSegmentsContent(text, url);
                                  }
                                  console.log(text.slice(0, 500)); // preview
                                }
                              } catch (e) {}
                              return res;
                            };
                            const origOpen = XMLHttpRequest.prototype.open;
                            const origSend = XMLHttpRequest.prototype.send;

                            XMLHttpRequest.prototype.open = function(method, url) {
                              this._url = url;
                              return origOpen.apply(this, arguments);
                            };

                            XMLHttpRequest.prototype.send = function() {
                              this.addEventListener("load", function() {
                                try {
                                  const text = this.responseText;
                                  if (text && text.includes("#EXTM3U")) {
                                    console.log("2HLS detected:", this._url);
                                    alert("2HLS detected:" + this._url);
                                    if (text.includes("#EXT-X-STREAM-INF")) {
                                      console.log("👉 MASTER PLAYLIST");
                                    } else if (text.includes("#EXTINF")) {
                                      console.log("👉 MEDIA PLAYLIST");      
                                      parseSegmentsContent(text, this._url);
                                    }
                                    console.log(text.slice(0, 500));
                                  }
                                } catch (e) {}
                              });

                              return origSend.apply(this, arguments);
                            };

                            function parseSegmentsContent(text, url){        
                              const lines=text.split(atob('Cg=='));
                              const segments=lines.filter(line=>line&&!line.startsWith("#"));
                              const baseUrl=url.substring(0,url.lastIndexOf("/")+1);
                              const absoluteSegments=segments.map(seg=>{
                                try{return new URL(seg,baseUrl).href;}catch(e){return seg;}
                              });
                              if (absoluteSegments.length > 10) {
                                absoluteSegments.length = 10;
                              }
								alert(absoluteSegments);
								alert(absoluteSegments.length);
								download(absoluteSegments);
                            }

async function download(absoluteSegments){
			  const chunks = [];
			
			  for (let i = 0; i < absoluteSegments.length; i++) {
			    const r = await origFetch(absoluteSegments[i], {
  credentials: "include"
});
			    const buffer = await r.arrayBuffer();
			    chunks.push(new Uint8Array(buffer));
			
			    console.log(`✅ Fetched segment ${i + 1}`);
			  }
			
			  // merge all segments
			  const totalLength = chunks.reduce((sum, arr) => sum + arr.length, 0);
			  const merged = new Uint8Array(totalLength);
			
			  let offset = 0;
			  for (const chunk of chunks) {
			    merged.set(chunk, offset);
			    offset += chunk.length;
			  }
			
			  const blob = new Blob([merged], { type: "video/mp2t" });
			
			  // download merged file
			  const a = document.createElement("a");
			  const url = URL.createObjectURL(blob);
			
			  a.href = url;
			  a.download = "video.ts";
			  a.click();
			
			  URL.revokeObjectURL(url);


}

export {aO as load_css,aN as start} from "https://xprime.su/_app/immutable/chunks/sNJRP5fT.js";
